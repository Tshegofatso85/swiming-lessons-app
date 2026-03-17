async function loadLayout() {
  const navbar = await fetch("../components/navbar.html");
  const navbarHTML = await navbar.text();
  document.getElementById("navbar").innerHTML = navbarHTML;

  const footer = await fetch("../components/footer.html");
  const footerHTML = await footer.text();
  document.getElementById("footer").innerHTML = footerHTML;

  setupNavbar();
  setupFooter();
}

loadLayout();
