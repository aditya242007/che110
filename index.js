        // Open the modal with dynamic content
        function openModal(imageSrc, captionText) {
            var modal = document.getElementById("myModal");
            var modalImg = document.getElementById("modalImage");
            var caption = document.getElementById("caption");

            modal.style.display = "block";
            modalImg.src = imageSrc;
            caption.innerHTML = captionText;
}

        // Close the modal
        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
}
