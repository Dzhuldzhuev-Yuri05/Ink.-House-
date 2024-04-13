const btn_fran = document.querySelector('.btn_fran');
const fran = document.querySelector('.fran');
const btn_gen = document.querySelector('.btn_gen');
const gen = document.querySelector('.gen');
const btn_ang = document.querySelector('.btn_ang');
const ang = document.querySelector('.ang');

function action_fran() {
	btn_fran.classList.add("active");
	fran.classList.add("action");
	btn_gen.classList.remove("active");
	gen.classList.remove("action");
	btn_ang.classList.remove("active");
	ang.classList.remove("action");
}
function action_gen() {
	btn_fran.classList.remove("active");
	fran.classList.remove("action");
	btn_gen.classList.add("active");
	gen.classList.add("action");
	btn_ang.classList.remove("active");
	ang.classList.remove("action");
}
function action_ang() {
	btn_fran.classList.remove("active");
	fran.classList.remove("action");
	btn_gen.classList.remove("active");
	gen.classList.remove("action");
	btn_ang.classList.add("active");
	ang.classList.add("action");
}

btn_fran.addEventListener("click", action_fran);
btn_gen.addEventListener("click", action_gen);
btn_ang.addEventListener("click", action_ang);