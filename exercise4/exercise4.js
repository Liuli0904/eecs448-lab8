function colorchange()
{
    var color = document.getElementById("m_color")
    var border_red = document.getElementById("b_red").value
    var border_blue = document.getElementById("b_blue").value
    var border_green = document.getElementById("b_green").value
    var borderWidth = document.getElementById("b_width").value
    var background_red = document.getElementById("bg_red").value
    var background_blue = document.getElementById("bg_blue").value
    var background_green = document.getElementById("bg_green").value
    color.style.borderColor = "rgb(" + border_red + "," + border_green + "," + border_blue + ")"
    color.style.borderWidth = borderWidth +"px"
    color.style.backgroundColor = "rgb(" + background_red + "," + background_green + "," + background_blue + ")"
}