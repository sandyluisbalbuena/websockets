import axios from 'axios';
import './bootstrap';

const form = document.getElementById('form');
const inputMessage = document.getElementById('message');
const listMessage = document.getElementById('listMessage');


form.addEventListener('submit', function(){
	event.preventDefault();


	const userInput = inputMessage.value;

	axios.post('/chat-message', {
		message: userInput
	});

});


const channel = Echo.channel('public.chat.1');


channel.subscribed(()=>{
	console.log('subscribed!!');
}).listen('.PokeForum', (event)=>{
	console.log(event);

	const message = event.message;

	const li =document.createElement('li');

	li.textContent = message;

	listMessage.appendChild(li);
})