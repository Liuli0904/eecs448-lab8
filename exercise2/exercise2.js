var m_picture = ["pictures/1.jpg", "pictures/2.jpg", "pictures/3.jpg", "pictures/4.jpg", "pictures/5.jpg"]
var picture = document.getElementsByTagName("img")[0];
var num = 0;
function previous()
{
    if(num > 0)
    {
        num = num - 1;
        picture.src = m_picture[num];
    }
    else
    {
        num = 4;
        picture.src = m_picture[num];
    }
}    
function next()
{
    if(num < 4)
    {
        num = num + 1;
        picture.src = m_picture[num];
    }
    else
    {
        num = 0;
        picture.src = m_picture[num];
    }
}
