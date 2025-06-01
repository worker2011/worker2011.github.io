var posts=["2024/02/03/2023-you-ji/","2024/09/01/2024-09-01-kai-xue-qian-xi-fa-yi-pian-da-shui-wen/","2024/01/18/abc-chuan-jiang-327-a-c/","2024/01/19/abc-chuan-jiang-328-a-c/","2024/01/19/abc-chuan-jiang-332-a-c/","2024/03/10/at-abc344-d-string-bags-ti-jie/","2024/01/28/b3929-gesp202312-wu-ji-xiao-yang-de-xing-yun-shu-ti-jie/","2024/12/08/gesp-202412-you-ji/","2024/11/09/csp-j-s-2024-you-ji/","2024/08/31/markdown-ce-shi/","2024/03/13/p10111-gesp202312-qi-ji-zhi-pai-you-xi-ti-jie/","2024/01/18/p2580-yu-shi-ta-cuo-wu-de-dian-ming-kai-shi-liao-ti-jie/","2024/02/29/p10187-usaco24feb-palindrome-game-b-ti-jie/","2024/02/29/p10189-usaco24feb-maximizing-productivity-b-ti-jie/","2024/01/18/p9012-usaco23jan-moo-operations-b-ti-jie/","2023/12/29/pythongui-tu-xing-hua-jie-mian-xiang-jie/","2023/12/31/python-huan-jing-an-zhuang-yu-pei-zhi/","2024/06/27/yacs-2020-nian-3-yue-yue-sai-bing-zu-shu-zi-jia-mi/","2024/06/27/yacs-2021-nian-5-yue-yue-sai-bing-zu-zhi-shu-zao-lin/","2024/06/27/yacs-2022-nian-1-yue-yue-sai-bing-zu-ping-heng-gua-hao/","2024/08/07/zhi-ding-zhen-ai-sheng-ming-yuan-chi-double/","2024/01/25/zhi-ding-yun-suan-fu-de-guan-xi-jian-lan/","2023/11/25/guan-yu-int128-he-short-ni-xu-yao-zhi-dao-de-yi-qie/","2023/09/24/guan-yu-auto-ni-xu-yao-zhi-dao-de-yi-qie/","2023/11/25/guan-yu-switch-ni-xu-yao-zhi-dao-de-yi-qie/","2023/11/25/guan-yu-san-mu-yun-suan-fu-ni-xu-yao-zhi-dao-de-yi-qie/","2025/02/08/bo-ke-fu-wu-jiang-ji-gong-gao/","2025/05/01/fu-chu-de-di-yi-pian-wen-zhang-liang-chang-acm-jing-sai-de-hun-he-you-ji/","2024/01/29/ji-chong-zui-duan-lu-suan-fa-dui-bi/","2024/06/03/ti-jie-p1029-noip2001-pu-ji-zu-zui-da-gong-yue-shu-he-zui-xiao-gong-bei-shu-wen-ti/","2024/01/25/wo-cao-zhe-me-duo-liang-xin-ruan-jian-du-zai-github-shang-ni-que-da-du-da-bu-kai/","2024/05/04/ti-jie-at-abc352-c-abc352c-standing-on-the-shoulders/","2024/07/13/ti-jie-at-abc362-c-abc362c-sum-0/","2024/08/03/ti-jie-at-abc365-c-abc365c-transportation-expenses/","2024/07/13/ti-jie-at-abc362-d-abc362d-shortest-path-3/","2024/09/07/ti-jie-at-abc370-c-abc370c-word-ladder/","2024/10/05/ti-jie-at-abc374-c-abc374c-separated-lunch/","2024/11/23/ti-jie-at-abc381-c-abc381c-11-22-substring/","2024/05/13/ti-jie-cf1337a-ichihime-and-triangle/","2024/10/20/ti-jie-at-abc376-c-abc376c-prepare-another-box/","2025/05/10/ti-jie-p1001-a-b-problem/","2024/07/29/ti-jie-p10815-mo-ban-kuai-su-du-ru/","2024/11/09/ti-jie-p11248-gesp202409-qi-ji-ju-zhen-yi-dong/","2024/05/25/ti-jie-p8267-usaco22open-counting-liars-b-u208878-qing-tian/","2024/08/29/ti-jie-p9938-usaco21open-acowdemia-ii-b/","2024/08/15/ti-jie-t496174-jin-ke-la-bei-r1-shi-san-tai-bao/","2024/08/15/ti-jie-t496174-jin-ke-la-bei-r1-zi-ji-shu-liang/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"LTC_Augenstern","link":"https://www.cnblogs.com/Liu-Tao-Chang/","descr":"同机房大佬一个","avatar":"https://cdn.luogu.com.cn/upload/image_hosting/j2nzn8tu.png"},{"name":"popcoount","link":"https://www.cnblogs.com/popfront","descr":"JL 大佬，实力远超小 L","avatar":"https://cdn.acwing.com/media/user/profile/photo/212809_lg_23dc89a03c.png"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };