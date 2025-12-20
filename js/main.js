document.addEventListener('DOMContentLoaded', () => {

    const bugForm = document.getElementById('bug-form');
    if (bugForm) {
        bugForm.addEventListener('submit', (e) => {
            e.preventDefault();

            alert (
                "Bug report submitted!\n\nThank you for helping improve the game."
            );

            bugForm.reset();
        });
    }

    const versionSelector = document.getElementById('version-selector');
    if (versionSelector) {
        versionSelector.addEventListener('change', () => {
            console.log("Version selected:", versionSelector.value);
        });
    }
});
