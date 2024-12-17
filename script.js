/*document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyCA');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const contractAddress = '0x00000000000000000000';
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = contractAddress;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);
            this.innerHTML = '✅ Copied!';
            setTimeout(() => {
                this.innerHTML = 'COPY CA: 0x000000000000000';
            }, 1500);
        });
    }
});*/


