var express = require('express');
var router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const UploadData = async(req, res, next) => {
  try {
    const uploadedFiles = req.files.map(file => {
      return {
        filename: file.filename,
        originalname: file.originalname,
        size: file.size,
      };
    });
  
    res.json({ files: uploadedFiles });
  } catch (error) {
    next(error);
  }
}

router.post('/upload', upload.array('files', 5), UploadData);

module.exports = router;
