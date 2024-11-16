const spanContainers=document.querySelectorAll(".titlecontent div");

spanContainers.forEach(item=>{

      const letters = item.children[0].textContent.split(""); // permet de séparer dans un tableau toutes les lettres du mot
      item.innerHTML=""; // vide le contenu des élements (div + span) de l'HTML pour créer les futurs span (cf ci-après) 

      // ci-dessous : el signifie élement et index : l'index. cette méthode précise que pour chaque lettres un span(entre backtik) est créé dans chaque div 
      letters.forEach((el,index)=>{
            item.innerHTML+=`<span style="transition-delay:${0.07*index}s">${el}</span>`
      })
      // transition-delay indique la durée à attendre avant de débuter la transition. Ici il attend 0.07s entre chaque lettre. le s signifie que ce style est calculé en secondes.
})