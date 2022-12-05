Natatki - note list application - Test Task

you can create, edit, delete notes, filter notes by tags.
create, delete tags while creating, editing notes.

*При редактировании заметки все слова, соответствующие тегам, должны подсвечиваться. - ПОКА не реализовано:
подсвечивание - нужно обернуть выбранный текст в <span> с определенным классом.
поле с текстом заметки - это <textarea>,  <input> не подходит, т.к. однострочный ввод только.
логично взять текст, заменить нужные слова на обернутые в <span>, с помощью innerHTML добавить в элемент.
ПРОБЛЕМА в том, что в React <textarea> контролируется через value:
при использовании innerHTML получаем внутри  тега <textarea> строку "тектс+теги";
при попытке передать данные в виде children в <textarea> React выдает ошибку, о том, что нужно использовать value.


