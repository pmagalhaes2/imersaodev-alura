var series = ["https://m.media-amazon.com/images/M/MV5BNzc4ZDc3OTYtMWQ3Yy00ZTc0LTgzYTUtNGExZTNhMjk4ZTc5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UY268_CR12,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR5,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var seriesNomes = ["Orphan Black", "Mr. Robot", "Vikings", "Game Of Thrones", "Breaking Bad", "Stranger Things", "Prison Break", "Dark"]

var trailer = ["https://www.youtube.com/watch?v=do_BCA-vR9E", "https://www.youtube.com/watch?v=xIBiJ_SzJTA", "https://www.youtube.com/watch?v=Auzs95InJzo", "https://www.youtube.com/watch?v=rlR4PJn8b8I", "https://www.youtube.com/watch?v=2-W6_6gJda0", "https://www.youtube.com/watch?v=b9EkMc79ZSU", "https://www.youtube.com/watch?v=AL9zLctDJaU", "https://www.youtube.com/watch?v=rrwycJ08PSA"]

for(var i = 0; i < series.length; i++){
    document.write('<div class="catalog">' + '<a href="' + trailer[i] + '"' + 'target="_blank">' + '<img src=' + series[i] + '>' + '</a>' + '<span class="title">' + seriesNomes[i] + '</span>' + '</div>')
}