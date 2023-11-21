<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WD 101</title>
</head>

<body>
    <div class="container">
        <div class="form-container">
            <h1>Registration Form</h1>
            <form action="" class="form" id="userForm">
                <input type="text" id="name" name="name" placeholder="Name" required>
                <input type="email" id="email" name="email" placeholder="Email" required>
                <input type="password" id="password" name="password" minlength="8" placeholder="Password" required>
                <input type="date" id="dob" name="dob" placeholder="Date of Birth" min="" max="" required>
                <label for="atnc">
                    <input type="checkbox" name="atnc" id="atnc" required>
                    Accept terms and conditions
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>

        <div class="table-container">
            <h1>Entries</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Date of Birth</th>
                        <th>Accepted terms?</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    <!-- Entries will be displayed here -->
                </tbody>
            </table>
        </div>
    </div>
    <script src="index.js"></script>
</body>

</html>

