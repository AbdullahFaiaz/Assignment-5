
// buy ticket button
document.getElementById('buy-tickets-btn').addEventListener('click',function(){
    document.getElementById("buy-tickets-section").scrollIntoView({behavior: 'smooth'});
})


// 


const buttons = document.getElementsByClassName('but');
let count = 0;

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', function (event) {
        const key = event.target.innerText;
        const press = event.target.style.backgroundColor;
        
        adrem(key);
        if (press === 'rgb(247, 248, 248)' || press === '') {
            addColor(key);
            increase('seatBooked',1);
            increase('totalPrice',550);
            increase('grandTotal',550);
            decrease('seatLeft',1);

            
            
        } else {
            removeColor(key);
            
            decrease('seatBooked',1);
            decrease('totalPrice',550);
            decrease('grandTotal',550);
            increase('seatLeft',1);
            
            document.getElementById('warn').setAttribute('hidden',true);

        }
        let count = document.getElementById('seatBooked').innerText;
        console.log(typeof(count))
        if(count === '4'){
            for(const btn of buttons){
                if(btn.style.backgroundColor !== 'rgb(29, 209, 0)')
                btn.disabled = true;
            }
            document.getElementById('warn').removeAttribute('hidden');
        }
        else{
            for(const btn of buttons){
                btn.disabled = false;
            }
            
            }
        
    });
}
