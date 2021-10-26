<?php
error_reporting(E_ALL);
$token = hash_hmac('sha1', uniqid(bin2hex(random_bytes(20))), 'key');
?>

<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="ja" xml:lang="ja" xmlns="http://www.w3.org/1999/xhtml">
<!-- InstanceBegin template="/Templates/corp_index.dwt" codeOutsideHTMLIsLocked="false" -->

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <meta name="google-site-verification" content="KTSMI-8S62r4HmDSZRYqGwkozOyNOrCX4debPWo0dIQ" />
  <!--meta-->
  <meta name="author" content="株式会社ライリスト社" />
  <meta name="Description" content="音楽を中心に豊かな生活を提供する　株式会社ライリスト社の公式Webサイト。アクティブ・シニアの音楽教室を全国展開、ギネス世界記録を大正琴アンサンブルで保有" />
  <meta name="Keywords" content="オカリナ,オカリーナ,オカリナ教室,大正琴,大正琴教室,楽器独習書,教則本,DVD,生涯学習,びでぼん,ギネス,大正琴アンサンブル" />
  <meta http-equiv="imagetoolbar" content="no" />
  <!-- Required meta tags -->
  <meta charset="utf-8">


  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="css/my-sheet.css" media="">
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->





  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
  </script>

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js'></script>


  <script>
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-44157242-1', 'lyrist.co.jp');
    ga('send', 'pageview');
  </script>

  <script>
    (function () {
      window.addEventListener("load", function () {
        $('[data-toggle="popover"]').popover();
      });
    })();
  </script>

  <script>
    $(document).on('change', ':file', function () {
      var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      input.parent().parent().next(':text').val(label);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
      if (/^image/.test(files[0].type)) { // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file
        reader.onloadend = function () { // set image data as background of div
          input.parent().parent().parent().prev('.imagePreview').css("background-image", "url(" + this.result +
            ")");
        }
      }
    });
  </script>

  <script>
    $(document).ready(function () {
      var show_bar = 0;
      $('input[type="file"]').click(function () {
        show_bar = 1;
      });
      //show iframe on form submit
      $('#submit-btn').click(function () {
        if (show_bar === 1) {
          $('#upload_frame').show();

          function set() {
            $('#upload_frame').attr('src', 'upload_frame.php?up_id=<?php echo $up_id; ?>');
          }
          setTimeout(set);
        }
      });
    });
  </script>


  <title>ライリッシュ・竪琴連盟｜竪琴通信アップロードフォーム</title>
</head>

<body>


  <div class="container-fluid bg-light">
    <article>
      <div class="m-3 d-flex flex-column align-items-center justify-content-around">
    <h2>ライリッシュ・竪琴通信</h2><h2 class="fas fa-h1">原稿アップロードフォーム</h2></div>
      <p class="m-3 d-flex align-items-center justify-content-around">
        ライリッシュ・竪琴通信原稿はこちらよりアップロードできます。</p>
      <div class="d-flex align-items-center justify-content-around">
        <form action="./php/submit.php" method="post" enctype="multipart/form-data">
          <input type="hidden" name="token" value="<?php echo($token);?>">
          <div class="form-group">
          <div class="mB-1"><label for="form_number" class="control-label">会員番号<span class="small text-danger bold">(必須)</span></label>
              <input required class="form-control" type="text" name="number" id="form_number"></div>
              <div class="mB-1"><label for="form_name" class="control-label">名前<span class="small text-danger bold">(必須)</span></label>
              <input required class="form-control" type="text" name="name" id="form_name"></div>
              <div class="mB-1"><label for="form_branch" class="control-label">支部名</label>
              <input class="form-control" type="text" name="branch" id="form_branch"></div>
              <div class="mB-1"><label for="form_instructor" class="control-label">指導者名<span class="small text-danger bold">(必須)</span></label>
              <input required class="form-control" type="text" name="instructor" id="form_instructor"></div>
              <div class="mB-1"><label for="form_school_name" class="control-label">教室名<span class="small text-danger bold">(必須)</span></label>
              <input required class="form-control" type="text" name="school_name" id="form_school_name"></div>
            </div>
          <div class="form-group">
            <p class="font-weight-bold border-bottom border-success control-label">原稿</p>
            <span>原稿を入力してください<span class="small text-danger bold">(必須)</span></span>
            <textarea class="form-control"  style="overflow:scroll;" name="body" rows="10" cols="25"></textarea>
          </div>
          <div class="form-group">
            <p class="font-weight-bold border-bottom border-success control-label">画像データ</p>
            <div id="filegroup" class="form-group">
              <!--              <p class="btn btn-primary">-->
              <input type="file" class="mb-3" name="pic_1" id="picfile1">
              
            </div>
            <input type="submit" value="送信する" id="submit-btn" class="btn btn-primary float-right">
            <input type="button" class="btn btn-secondary" value="+データ追加" id="addForm">
          </div>
        </form>
      </div>
    </article>
  </div>
  <hr>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/filename.js"></script>
  <script type="text/javascript" src="js/addform.js"></script>
</body>

</html>