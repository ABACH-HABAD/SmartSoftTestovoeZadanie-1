<form class="form" id="Form2">
      <div class="form-group margin-down">
        <h2 class="from-headline" id="FromHeadline">Информация о заказе</h2>
        <div class="form-text from-subheadline">Мы доставим за 2 дня🚚📦</div>
      </div>
      <div class="form-group margin-down">
        <label for="InputName2">Полное имя</label>
        <input
          type="text"
          class="form-control"
          id="InputName2"
          placeholder="Введите ваше имя"
        />
      </div>
      <div class="form-group margin-down">
        <label for="InputAdress">Адрес доставки</label>
        <input
          type="text"
          class="form-control"
          id="InputAdress"
          placeholder="Введите адрес доставки"
        />
      </div>
      <div class="form-group margin-down">
        <label for="InputMessage2">Комментарий к заказу</label>
        <textarea
          class="form-control message-text-box"
          id="InputMessage2"
          placeholder="Введите сообщение"
        ></textarea>
      </div>
      <div class="form-check margin-down">
        <input
          class="form-check-input light-gray-border"
          type="checkbox"
          value=""
          id="AcceptTermsOfContract"
        />
        <label class="form-check-label" for="AcceptTermsOfContract">
          Принять условия договора-оферты
        </label>
      </div>
      <button id="CreateContract" class="btn btn-dark align-strech">
        Создать заказ
      </button>
    </form>