function showCategory(aCategory) {
  if (aCategory) {
    let sCategory = document.getElementById("nav-item-name-" + aCategory);
    /* id 가 category-name 인 클래스의 text 를 변경해준다 */
    document.getElementById("category-name").textContent =
      sCategory.textContent;
    document.getElementById("category-" + aCategory).hidden = false;
  } else {
    document.getElementById("category-name").textContent = "전체 글";
    document.getElementById("category-all").hidden = false;
  }
}

function initHiddenClass() {
  let allHiddenClassObj = document.getElementsByClassName("hidden");
  while (allHiddenClassObj.length) {
    allHiddenClassObj.item(0).classList.remove("hidden");
  }
}

function initHiddenAttribute() {
  const devTag = document.getElementById("content-tag-list-id-develop");
  const bugTag = document.getElementById("content-tag-list-id-bugs");
  const studyTag = document.getElementById("content-tag-list-id-study");
  const devCategory = document.getElementById("category-develop");
  const bugCategory = document.getElementById("category-bugs");
  const studyCategory = document.getElementById("category-study");

  if (devTag)
    document.getElementById("content-tag-list-id-develop").hidden = true;
  if (bugTag) document.getElementById("content-tag-list-id-bugs").hidden = true;
  if (studyTag)
    document.getElementById("content-tag-list-id-study").hidden = true;

  if (devCategory) document.getElementById("category-develop").hidden = true;
  if (bugCategory) document.getElementById("category-bugs").hidden = true;
  if (studyCategory) document.getElementById("category-study").hidden = true;
}

function showTagByCategory(aCategory) {
  const tag = document.getElementById("content-tag-list-id-" + aCategory);
  if (aCategory != "") {
    let sTags = document.querySelectorAll(".tag-wrapper > .tag-box");
    for (let i = 0; i < sTags.length; i++) {
      if (
        !(sTags.item(i).getAttribute(`tag-category-all`) == null) ||
        !(sTags.item(i).getAttribute(`tag-category-${aCategory}`) == null)
      ) {
        sTags.item(i).classList.remove("hidden");
      } else {
        sTags.item(i).classList.add("hidden");
      }
    }

    if (tag)
      document.getElementById(
        "content-tag-list-id-" + aCategory
      ).hidden = false;
  } else {
    let sTags = document.querySelectorAll(".tag-wrapper > .tag-box");
    let sTagLists = document.getElementsByClassName("content-tag-list");
    for (let i = 0; i < sTags.length; i++) {
      sTags.item(i).classList.remove("hidden");
    }

    for (let i = 0; i < sTagLists.length; i++) {
      sTagLists.item(i).hidden = false;
    }
  }
}

function initSelected() {
  let sSelectedElems = document.getElementsByClassName(`selected`);

  while (sSelectedElems.length) {
    sSelectedElems.item(0).classList.remove(`selected`);
  }
}

function setTags(aCategory) {
  initSelected();
  initHiddenClass();
  showTagByCategory(aCategory);

  let sTagAll = document.querySelectorAll('[data-tag="all"]');
  for (let i = 0; i < sTagAll.length; i++) {
    sTagAll.item(i).classList.add("selected");
  }
}

function showPostCardsByTagName(aTagName) {
  let sAllPostCards = document.querySelectorAll(".post-list > .post-wrapper");

  if (aTagName != "all") {
    for (let i = 0; i < sAllPostCards.length; i++) {
      if (sAllPostCards.item(i).getAttribute(`data-${aTagName}`) == null) {
        sAllPostCards.item(i).classList.add("hidden");
        sAllPostCards.item(i).classList.remove("selected");
      } else {
        sAllPostCards.item(i).classList.remove("hidden");
        sAllPostCards.item(i).classList.add("selected");
      }
    }
  } else {
    for (let i = 0; i < sAllPostCards.length; i++) {
      sAllPostCards.item(i).classList.remove("hidden");
      sAllPostCards.item(i).classList.remove("selected");
    }
  }
}

/* https://velog.io/@awesomelon/IOS-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B8%B0%EA%B8%B0%EC%97%90%EC%84%9C-click-event-%EC%82%AC%EC%9A%A9%EC%8B%9C-%EB%AC%B8%EC%A0%9C%EC%A0%90JS */
let gClickEvent = (function () {
  if ("ontouchstart" in document.documentElement === true) {
    return "touchstart"; /* for IOS */
  } else {
    return "click";
  }
})();

window.addEventListener("hashchange", () => {
  let sCategory = window.location.hash.substring(1).toLocaleLowerCase();

  initHiddenAttribute();
  showCategory(sCategory);
  setTags(sCategory);
});

/* https://programmingsummaries.tistory.com/380
   https://ifuwanna.tistory.com/63
뒤로 가기 버튼으로 돌아가면 BFCache 를 사용하기 때문에 $(document).ready 호출이 발생하지 않는다.
이 캐쉬에 상관없이 pageshow 이벤트가 발생하기 때문에 이 이벤트를 사용한다. */
window.addEventListener("pageshow", (event) => {
  if (
    event.persisted ||
    (window.performance && window.performance.navigation.type == 2)
  ) {
    /* BFCache 이용시 */
    window.location.reload();
  } else {
    let sCategory = window.location.hash.substring(1).toLocaleLowerCase();

    initHiddenAttribute();
    showCategory(sCategory);
    setTags(sCategory);
  }
});

document.onload = function () {
  let sCategory = window.location.hash.substring(1).toLocaleLowerCase();

  initHiddenAttribute();
  showCategory(sCategory);
  setTags(sCategory);
};

window.addEventListener(gClickEvent, (event) => {
  sCurrentTag = event.target.dataset.tag;

  if (sCurrentTag) {
    initSelected();
    showPostCardsByTagName(sCurrentTag);

    sSelectedTags = document.querySelectorAll(`[data-tag="${sCurrentTag}"]`);
    for (let i = 0; i < sSelectedTags.length; i++) {
      sSelectedTags.item(i).classList.add("selected");
    }
  }
});
