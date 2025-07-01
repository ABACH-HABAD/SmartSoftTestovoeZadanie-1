    <form class="form" id="Form1">
      <div class="form-group margin-down">
        <label for="InputName">Имя</label>
        <input
          type="text"
          class="form-control"
          id="InputName"
          placeholder="Введите ваше имя"
        />
      </div>
      <div class="form-group margin-down">
        <label for="InputSurname">Фамилия</label>
        <input
          type="text"
          class="form-control"
          id="InputSurname"
          placeholder="Введите вашу фамилию"
        />
      </div>
      <div class="form-group margin-down">
        <label for="InputEmail">Почта</label>
        <input
          type="email"
          class="form-control"
          id="InputEmail"
          placeholder="Введите вашу электронную почту"
        />
      </div>
      <div class="form-group margin-down">
        <label for="InputMessage">Сообщение</label>
        <textarea
          class="form-control message-text-box"
          id="InputMessage"
          placeholder="Введите сообщение"
        ></textarea>
      </div>
      <button type="submit" id="Send" class="btn btn-dark align-strech">
        Отправить
      </button>
    </form>