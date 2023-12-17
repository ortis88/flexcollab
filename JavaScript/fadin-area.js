//header加
{/* <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script> */}
{/* <style>
.fadinarea{
    width: 100%;
}
</style> */}

//將要將要延遲顯示的區塊用
//<div class="fadinarea"></div>
//包起來

$(document).ready(function() {
    // 將直接顯示第一個要顯示的div
    $('.fadinarea:first').css({
      opacity: 1,
    });

    // 將其他區域的透明度改0
    $('.fadinarea:not(:first)').css({
      opacity: 0,
    });

    $(window).scroll(function() {
      //設定捲動上緣的高度和實際window的高度
      let scrollHeight = $(this).scrollTop();
      let windowHeight = $(this).height();

      // 計算出現在可已看到的區域的開始和結束高度
      let visibleStart = scrollHeight;
      let visibleEnd = scrollHeight + windowHeight;

      // each檢查每個區域是否在可視範圍內(除了第一個)
      $('.fadinarea:not(:first)').each(function(index) {
        let areaStart = $(this).offset().top;
        let areaEnd = areaStart + $(this).height();
      //index是範圍高度

        // 如果區域在範圍內，開始跑動畫顯示
        if ((areaStart >= visibleStart && areaStart <= visibleEnd) || (areaEnd >= visibleStart && areaEnd <= visibleEnd)) {
          $(this).delay(100 * index).animate({
            opacity: 1,
            transform: 'translateY(0)'
          }, 600); // 動畫時間為 0.6 秒
        }
      });
    });
  });