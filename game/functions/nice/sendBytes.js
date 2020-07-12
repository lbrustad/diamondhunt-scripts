'use strict';

function sendBytes(data)
{
	if (data.length <= 255)
	{
		global_webSocket.send(data);
	}
};
