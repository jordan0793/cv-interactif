document.addEventListener("DOMContentLoaded", function () {
  /* Chercher les liens*/

  /*Chercher Experience*/
  let blocExperience = document.querySelector(".experience");
  console.log(blocExperience);

  let fermerExperience = document.querySelector(".fermerExperience");
  console.log(fermerExperience);

  /*Chercher Competences*/
  let blocCompetences = document.querySelector(".competences");
  console.log(blocCompetences);

  let fermerCompetences = document.querySelector(".fermerCompetences");
  console.log(fermerCompetences);

  /*Chercher Formation*/
  let blocFormation = document.querySelector(".formation");
  console.log(blocFormation);

  let fermerFormation = document.querySelector(".fermerFormation");
  console.log(fermerFormation);

  /*Chercher A propos de moi*/
  let blocPersonnel = document.querySelector(".personnel");
  console.log(blocPersonnel);

  let fermerPersonnel = document.querySelector(".fermerPersonnel");
  console.log(fermerPersonnel);

  /* Chercher le blocPage*/
  let blocPage = document.querySelector(".bloc_page");
  console.log(blocPage);

  /* Formules d'appel au clic*/

  /*expérience appel */

  blocExperience.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.add("menuOpenExperience");
  });
  fermerExperience.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.remove("menuOpenExperience");
  });
  /*competences appel*/
  blocCompetences.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.add("menuOpenCompetences");
  });

  fermerCompetences.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.remove("menuOpenCompetences");
  });

  /*Formation appel */
  blocFormation.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.add("menuOpenFormation");
  });

  fermerFormation.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.remove("menuOpenFormation");
  });

  /*Personnel Appel*/
  blocPersonnel.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.add("menuOpenPersonnel");
  });
  fermerPersonnel.addEventListener("click", function (e) {
    e.preventDefault();
    blocPage.classList.remove("menuOpenPersonnel");
  });
});
