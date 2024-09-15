const actionLink = document.querySelectorAll(".link-card .link-action");

console.log("actionLink : ", actionLink);

actionLink.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));
        document.getElementById("toast").innerHTML=`
            <div class="toast-container">
                <p>🟢 Link berhasil disalin!</p>
            </div>
            `;

            setTimeout(() => {
                document.querySelector("#toast .toast-container").classList.add("toast-gone");
            }, 300)
            setTimeout(() => {
                document.querySelector("#toast .toast-container").remove();
            }, 4000)
    })
})
