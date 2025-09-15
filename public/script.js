
// DOMContentLoaded word gebruikt om er voor te zorgen dat de javascript pas bruikbaar is als de gehele html is geladen.
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('projects-container');
    const boxes = document.querySelectorAll('.box');
    
    // hiermee word onthouden wat er momenteel word gedragd  
    let draggedElement = null;
    
    // hier krijgt elke event een listener, wanneer hij word gedragd wanneer hij word gedropt. Etc
    boxes.forEach(box => {
        box.addEventListener('dragstart', handleDragStart);
        box.addEventListener('dragend', handleDragEnd);
        box.addEventListener('dragover', handleDragOver);
        box.addEventListener('drop', handleDrop);
        box.addEventListener('dragenter', handleDragEnter);
        box.addEventListener('dragleave', handleDragLeave);
    });
    
    // zoals met de let draggedelement = null; word er hier opgeslagen wanneer je dragt
    function handleDragStart(e) {
        draggedElement = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.outerHTML);
    }
    
    // wanneer het draggen stopt word deze class verwijderd
    function handleDragEnd(e) {
        this.classList.remove('dragging');
        draggedElement = null;
    }
    
    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }
    
    function handleDragEnter(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    }
    
    function handleDragLeave(e) {
        this.classList.remove('drag-over');
    }
    
    function handleDrop(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        
        if (draggedElement !== this) {
            const allBoxes = [...boxes];
            const draggedIndex = allBoxes.indexOf(draggedElement);
            const droppedIndex = allBoxes.indexOf(this);
            
            if (draggedIndex < droppedIndex) {
                this.parentNode.insertBefore(draggedElement, this.nextSibling);
            } else {
                this.parentNode.insertBefore(draggedElement, this);
            }
        }
    }
    
    const style = document.createElement('style');
    style.textContent = `
        .drag-over {
            border: 2px dashed #667eea !important;
            background: rgba(102, 126, 234, 0.1) !important;
        }
    `;
    document.head.appendChild(style);
});
