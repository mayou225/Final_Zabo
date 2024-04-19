document.addEventListener('DOMContentLoaded', function() {
    // Sélection des boutons d'ajout d'expériences et d'éducation
    var btnAddExp = document.getElementById('btn-add-new-exp');
    var btnAddEdu = document.getElementById('btn-add-new-edu');

    // Ajout d'un gestionnaire d'événements sur le bouton d'ajout d'expériences
    btnAddExp.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien

        // Création d'un nouvel élément d'expérience
        var expItem = document.createElement('div');
        expItem.classList.add('w-dyn-item');

        // Contenu de l'élément d'expérience 
        expItem.innerHTML = `
            <div class="post-wrapper">
                <div class="post-content">
                    <!-- Ajoutez ici les éléments de votre expérience -->
                </div>
            </div>
        `;

        // Ajout de l'élément d'expérience à la liste des expériences
        var expList = document.getElementById('expe-posts');
        expList.appendChild(expItem);
    });

    // Ajout d'un gestionnaire d'événements sur le bouton d'ajout d'éducation
    btnAddEdu.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien

        // Création d'un nouvel élément d'éducation
        var eduItem = document.createElement('div');
        eduItem.classList.add('w-dyn-item');

        // Contenu de l'élément d'éducation 
        eduItem.innerHTML = `
            <div role="listitem" class="w-dyn-item">
                <!-- Ajoutez ici les éléments de votre éducation -->
            </div>
        `;

        // Ajout de l'élément d'éducation à la liste d'éducation
        var eduList = document.getElementById('edu-posts');
        eduList.appendChild(eduItem);
    });
});
