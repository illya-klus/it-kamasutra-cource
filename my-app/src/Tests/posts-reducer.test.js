import postsReducer, { putPostActionCreator } from "../redux/posts-reducer";




it("New posts array length should be incremented.", () => {
    //Підготовка вхідних даних
    let baseState = {
      mockPosts : [
        {
          id: 2,
          name: '@tech_guy',
          profileImg: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
          postPhoto: 'https://www.pcworld.com/wp-content/uploads/2025/04/pcw07_GamingSetup_RGBeci.jpg?quality=50&strip=all',
          description: 'Зібрав новий ПК. FPS зашкалює!',
          likes: 47,
          comments: 5
        },
        {
          id: 3,
          name: '@travel_bird',
          profileImg: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
          postPhoto: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
          description: 'Прокинувся з виглядом на Альпи 😍',
          likes: 89,
          comments: 12
        },
        {
          id: 4,
          name: '@foodie',
          profileImg: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
          postPhoto: 'https://klopotenko.com/wp-content/uploads/2022/01/pankeiku-s-chornoi-smorodinoi_siteweb-1000x600.jpg?v=1720550123',
          description: 'Домашні панкейки — простий кайф 💛',
          likes: 23,
          comments: 3
        }
      ],
    };

    let newPost = {
          id: 1,
          name: '@catlover',
          profileImg: 'https://i.pinimg.com/236x/b5/eb/43/b5eb43c9fc0ced8bc3f918864a049350.jpg',
          postPhoto: 'https://www.iphones.ru/wp-content/uploads/2022/02/ujgJD-7..v1633547653.jpg',
          description: 'Чудовий день для чудових справ!',
          likes: 12,
          comments: 1
    }

    let {name, profileImg, postPhoto, description} = newPost;
    let action = putPostActionCreator(name, profileImg, postPhoto, description);

    //Виклик тестованого редюсера
    let newState = postsReducer(baseState, action);

    //Перевіряємо чи вийшло те що ми очікували
    expect(newState.mockPosts.length).toBe(baseState.mockPosts.length + 1);
});
