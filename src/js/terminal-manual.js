// створення нової гілкі і переключення на неї
// git checkout -b new_branch
// переключення на меін
// git checkout main

// підтягнути зміни з віддаленого репозиторія (fetch + pull origin у Desktop), робиться на гілці меін
// git pull origin main

// робимо коміт своєї робочої гілки
// git add . (збираємо зміни з усіх файлів)
// git commit -m 'what in commit' (робимо комміт)
// git push origin your_branch (відправляємо свою локальну гілку на віддалений репо, pull request)

// щоб стягнути актуальні зміни з меін, коли працюємо у своїй гілці
// 1. робимо комміт у своїй гілці:
// git add .
// git commit -m 'what in commit'
// 2. переходимо на меін і зтягуємо свіжі зміни
// git checkout main
// git pull origin main
// 3. повертаємось на свою гілку і мерджимо зміни з меін
// git checkout your_branch
// git merge main
// якщо є конфлікти, вирішуємо локально, коммітимо і ще раз мердж