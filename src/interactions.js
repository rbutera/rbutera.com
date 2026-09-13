const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

if (menu instanceof HTMLButtonElement && navigation instanceof HTMLElement) {
  document.documentElement.classList.add("js");
  const setOpen = (open) => {
    menu.setAttribute("aria-expanded", String(open));
    menu.textContent = open ? "Close" : "Menu";
    navigation.classList.toggle("is-open", open);
  };
  menu.addEventListener("click", () =>
    setOpen(menu.getAttribute("aria-expanded") !== "true"),
  );
  document
    .querySelector(".wordmark")
    ?.addEventListener("click", () => setOpen(false));
  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a"))
      setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menu.getAttribute("aria-expanded") === "true"
    ) {
      setOpen(false);
      menu.focus();
    }
  });
}

for (const link of document.querySelectorAll("[data-dialog]")) {
  const dialog = document.getElementById(link.getAttribute("data-dialog"));
  if (!(dialog instanceof HTMLDialogElement)) continue;
  link.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    dialog.showModal();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}
