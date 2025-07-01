document.addEventListener("DOMContentLoaded", function () {
  const textarea1 = document.getElementById("InputMessage");
  const textarea2 = document.getElementById("InputMessage2");
  textarea1.style.height = "100px";
  textarea2.style.height = "100px";

  const reviews = document.getElementById("ReviewList");
  $.ajax({
    url: "reviews.json",
    type: "GET",
    dataType: "json",
    success: function (response) {
      var usedId = new Array(response.reviews.length);
      for (var i = 0; i < usedId.length; i++) {
        var goNext = false;
        while (!goNext) {
          goNext = true;
          usedId[i] = Math.floor(Math.random() * usedId.length);
          for (var j = 0; j < usedId.length; j++) {
            if (i != j && usedId[i] == usedId[j]) {
              goNext = false;
              break;
            }
          }
          if (goNext) break;
        }
      }

      for (var i = 0; i < 6; i++) {
        reviews.insertAdjacentHTML(
          "beforeend",
          '<div class="col">' +
            '<div class="review">' +
            '<div class="review-info">' +
            "ⓘ" +
            "</div>" +
            "<div>" +
            '<h3 class="from-headline review-title">' +
            response.reviews[usedId[i]].title +
            "</h3>" +
            '<p class="form-text from-subheadline review-text">' +
            response.reviews[usedId[i]].text +
            "</p>" +
            "</div>" +
            "</div>" +
            "</div>"
        );
      }
    },
  });
});

function sendForm1(event) {
  event.preventDefault();

  var exMessage = "";
  if ($("#InputName").val().length < 3) {
    if ($("#InputName").val().length < 1) exMessage += "Введите имя<br>";
    else
      exMessage +=
        "Имя слишком короткое. Минимальная дланна имени 3 символа<br>";
  }
  if ($("#InputEmail").val().length < 1) {
    exMessage += "Введите электронную почту<br>";
  }
  if ($("#InputMessage").val().length < 1) {
    exMessage += "Введите сообщение<br>";
  }

  if (exMessage) {
    Swal.fire("Неверные данные", exMessage, "error");
    return;
  }

  var formData = {
    name: $("#InputName").val(),
    surname: $("#InputSurname").val(),
    email: $("#InputEmail").val(),
    message: $("#InputMessage").val(),
  };

  $.ajax({
    url: "127.0.0.1",
    type: "POST",
    data: formData,
    dataType: "json",
    success: function () {
      Swal.fire({
        title: "Успех!",
        text: "Сообщение успешно отправлено",
        icon: "success",
      });
    },
    error: function (xhr, status, error) {
      Swal.fire({
        title: "Ошибка!",
        text: "Произошла ошибка при отправке: " + error,
        icon: "error",
      });
    },
  });
}

$(document).ready(function () {
  $("#Form1").on("submit", sendForm1);
});

function sendForm2(event) {
  event.preventDefault();

  var exMessage = "";
  if ($("#InputName2").val().length < 3) {
    if ($("#InputName2").val().length < 1) exMessage += "Введите имя<br>";
    else
      exMessage +=
        "Имя слишком короткое. Минимальная дланна имени 3 символа<br>";
  }
  if (!$("#AcceptTermsOfContract").is(":checked")) {
    exMessage += "Вы должны принять условия договора-оферты<br>";
  }
  if (exMessage) {
    Swal.fire("Неверные данные", exMessage, "error");
    return;
  }

  var formData = {
    name: $("#InputName2").val(),
    surname: $("#InputAdress").val(),
    message: $("#InputMessage2").val(),
  };

  var result =
    "Имя: " +
    document.getElementById("InputName2").value +
    "<br>Адрес доставки: " +
    document.getElementById("InputAdress").value +
    "<br>Сообщение: " +
    document.getElementById("InputMessage2").value;
  Swal.fire("Заказ успешно принят", result, "success");
}

$(document).ready(function () {
  $("#Form2").on("submit", sendForm2);
});

document.getElementById("InputMessage").addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = Math.max(this.scrollHeight, 100) + "px";
});

document.getElementById("InputMessage2").addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = Math.max(this.scrollHeight, 100) + "px";
});
