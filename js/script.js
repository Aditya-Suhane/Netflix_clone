function makeFAQ() {
    let qna = {
        "What is Netflix?":
        ["Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.",
        "You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"],
    
        "How much does Netflix cost?":
        ["Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."],
        
        "Where can I watch?":
        ["Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."],
    
        "How do I cancel?":
        ["Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime."],
    
        "What can I watch on Netflix?":
        ["Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."],
    
        "Is Netflix good for kids?":
        ["The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."]
    }
    
    let container = document.querySelector("#faq .questions");
    
    for (const question in qna) {
        let ans2 = qna[question][1];
        let html = `
        <div class="card flex-col">
            <h3 class="question h3-design">${question}</h3>
            <div class="answer hidden flex-col h-center v-center">
                <p class="h3-design">${qna[question][0]}</p>
                <p class="h3-design">${(ans2)?ans2:""}</p>
            </div>
        </div>`;
        container.innerHTML += html; 
    }
    
    let questions = document.querySelectorAll("#faq .questions .card h3");
    
    questions.forEach(question => {
        question.addEventListener("click",()=>{
            let scroll = question.nextElementSibling;
            if (scroll.classList.contains("hidden")){
                scroll.classList.remove("hidden");
                scroll.classList.add("visible");
            }
            else{
                scroll.classList.add("hidden");
                scroll.classList.remove("visible");
            }
        })
    });
}

makeFAQ();