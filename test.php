<?php
$path = 'C:\Users\Андрей\Desktop\Веб\metlineSklad\price_aluminium';
recursiveFiles($path);

function recursiveFiles($path) {
	$headerCode = file_get_contents("headerCode.html");
	$footerCode = file_get_contents("footerCode.html");
	$files = scandir($path);
	$files = array_diff(scandir($path), array('.', '..'));
	foreach ($files as $file) {
		if(is_dir($path . "\\" . $file)){
			recursiveFiles($path . "\\" . $file);
		}
		else {
			$fileContext = file_get_contents($path . '\\' . $file);
			preg_match('/(<div id="content".*?>(.*)<div style="clear:both;">)/ism', $fileContext, $result);
			
			$resultString = $headerCode ."". $result[0] ."". $footerCode;
			if(file_put_contents($path . "\\" . $file, $resultString))
				echo "Done for " . $file . "<br>";
			else
				echo "Error for " . $file . "<br>";
		}
	}
}
?>