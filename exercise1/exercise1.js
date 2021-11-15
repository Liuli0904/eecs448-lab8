function validate()
{
    var m_password1 = document.getElementById("password1").value;
    var m_password2 = document.getElementById("password2").value;
    if((m_password1.length < 8) || (m_password2.length < 8))
    {
        alert("The passwords are not at least 8 characters long");
    }
    else if(m_password1 != m_password2)
    {
        alert("The passwords entered don't match");
    }
    else
    {
        alert("Password is set successfully!")
    }
}