window.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector(".test__nav2-ul");
  const cursor = document.querySelector(".cursor");
  const cursorContent = document.querySelector(".cursor__content");
  const vehicles = document.querySelector(".test__hero");
  const characters = document.querySelector(".test__characters");
  const contact = document.querySelector(".test__idea");
  const weapon = document.querySelector(".test__weapon");
  const pagination = document.querySelector(".test__pagination-btn");
  const toTop = document.querySelector(".test__to-top-btn");
  const links = document.querySelectorAll(".link");

  const changeCursorClass = (elem, classModificator) => {
    elem?.addEventListener("mouseenter", () => {
      cursor?.classList.add(`cursor_${classModificator}`);
      cursorContent?.classList.add(`cursor__content_${classModificator}`);
    });
    elem?.addEventListener("mouseleave", () => {
      cursor?.classList.remove(`cursor_${classModificator}`);
      cursorContent?.classList.remove(`cursor__content_${classModificator}`);
    });
  };

  navigation?.addEventListener("click", (event) => {
    const target = event.target;
    const activeLink = document.querySelector(".link_active");
    if (
      target.classList.contains("link") &&
      !target.classList.contains("link_active")
    ) {
      activeLink?.classList.remove("link_active");
      target.classList.add("link_active");
    }
  });

  window.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;

    if (cursor) {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    }
  });

  links.length &&
    links.forEach((link) => {
      changeCursorClass(link, "link");
    });
    
  changeCursorClass(vehicles, "view");
  changeCursorClass(characters, "view-project");
  changeCursorClass(weapon, "view-project");
  changeCursorClass(contact, "contact");
  changeCursorClass(pagination, "btn");
  changeCursorClass(toTop, "btn");
});
