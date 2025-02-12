<?php
	$firstName = $_POST['FirstName'];
    $lastName = $_POST['LastName'];
    $email = $_POST['Email'];
    $phoneNumber = $_POST['PhoneNumber'];
    $message = $_POST['message'];

	// Database connection
	$conn = new mysqli('localhost','root','','hireme');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into tohire(FirstName, LastName, Email, PhoneNumber, message) values(?, ?, ?, ?, ?)");
		$stmt->bind_param("sssis", $firstName, $lastName, $email, $phoneNumber,$message);
		$execval = $stmt->execute();
		echo $execval;
		echo "Contacted successfully...";
		$stmt->close();
		$conn->close();
	}
?>