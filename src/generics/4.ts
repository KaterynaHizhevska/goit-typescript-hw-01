type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення або створення користувача
  console.log(initialValues);
}

// Виклик функції
createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
}); 