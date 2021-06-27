const faqcontainer_itemheader = document.querySelectorAll(
  ".faqcontainer_item-header"
);
faqcontainer_itemheader.forEach((headerElement) => {
  headerElement.addEventListener("click", () => {
    const activeHeader = document.querySelector(
      ".faqcontainer_item-header.active"
    );

    if (activeHeader && activeHeader !== headerElement) {
      activeHeader.classList.toggle("active");
      activeHeader.nextElementSibling.style.maxHeight = 0;
    }
    headerElement.classList.toggle("active");

    const faq_itembody = headerElement.nextElementSibling;

    if (headerElement.classList.contains("active")) {
      faq_itembody.style.maxHeight = faq_itembody.scrollHeight + "px";
    } else {
      faq_itembody.style.maxHeight = 0;
    }
  });
});
