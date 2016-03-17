function is_null(x)
{
	return x == null;
}

function is_undefined(x)
{
	return typeof(x) == 'undefined';
}

function updateCaptcha(captcha, ev)
{
    ev.preventDefault();

    if ($(captcha).length)
    {
        $(captcha).attr('src', $(captcha).attr('src').split( '?' )[0] + '?v=' + Math.random());
    }

    return !1;
}