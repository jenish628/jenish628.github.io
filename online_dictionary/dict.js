$(document).ready(function () {

    $('#btn-lookup').click(function () {

        let query = $('#search-word').val()
        $.ajax({
            url: `/search?query=${query} `,
            success: function (res) {

                const data = res.data
                console.log('===========ddd', data)
                let resData = data.map((it, index) => {

                    return `${index + 1} (${it.wordtype}) :: ${it.definition}<br>`
                })
                $('#data-result').html(resData)
            },
            error: function (err) {
                alert("Oops something went wrong")
            }
        })

    })


})