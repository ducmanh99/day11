// const list = document.querySelector("#list");
// const btnadd = document.querySelector("#btnadd");
// const btndelete = document.querySelector("#btndelete");
// btnadd.onclick = () => {
// 	const value = prompt("nhap vao");
// 	const li = document.createElement("li");
// 	li.innerHTML = value;
// 	list.appendChild(li);
// };
// btndelete.onclick = () => {
// 	const index = prompt("number");
// 	list.removeChild(list.children[index]);
// };
const title = document.querySelector("#title");
const hiddenbtn = document.querySelector("#hiddenbtn");
const colorbtn = document.querySelector("#colorbtn");
const sizebtn = document.querySelector("#sizebtn");
const change = document.querySelector("#changebtn");

colorbtn.onclick = () => {
	title.classList.toggle("item2");
	title.innerHTML = "tenology school";
};
hiddenbtn.onclick = () => {
	title.classList.toggle("item1");
};
sizebtn.onclick = () => {
	title.classList.toggle("item3");
};
change.onclick = () => {
	const index = prompt("nhap tu muon thay doi");

	title.innerHTML = index;
};
