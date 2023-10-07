const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const validateAndSanitize = [
  check('universityName').isString().trim(),
  check('instituteName').isString().trim(),
  check('departmentName').isString().trim(),
  check('courseName').isString().trim(),
  check('courseCode').isString().trim(),
  check('semester').isInt({ min: 1 }).toInt(),
];

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server Error');
});

app.post('/course', validateAndSanitize, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    universityName,
    instituteName,
    departmentName,
    courseName,
    courseCode,
    semester,
  } = req.body;

  res.status(200).json({ message: 'Course information saved successfully' });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
