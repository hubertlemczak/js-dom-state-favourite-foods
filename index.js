const state = {
  favFoods: [],
  isFull: false,
};

const setState = (newState) => {
  console.log(newState);
  Object.keys(newState).forEach((key) => {
    state[key] = newState[key];
  });
  render();
};

const formListener = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateFavouriteFoodsListCapacity();
    if (!state.isFull) {
      const food = { food: form.food.value };
      const newFoods = [...state.favFoods];
      newFoods.push(food);
      setState({ favFoods: newFoods });
    } else alert('list is full, please delete items');
    form.reset();
  });
};

const updateFavouriteFoodsListCapacity = () => {
  const listLength = state.favFoods.length;
  if (listLength === 5) setState({ isFull: true });
  else setState({ isFull: false });
};

const renderFavouriteFoodsList = () => {
  const foodList = document.querySelector('ul');
  foodList.innerHTML = '';
  state.favFoods.forEach((favFood) => {
    const li = document.createElement('li');
    li.innerText = favFood.food;
    foodList.appendChild(li);
  });
};

const render = () => {
  renderFavouriteFoodsList();
};

const init = () => {
  formListener();
  render();
};

init();
