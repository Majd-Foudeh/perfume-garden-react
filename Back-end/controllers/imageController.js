// const upload=(req, res) => {
//     if (!req.file) {
//       return res.status(400).send("No image file received");
//     }
//     console.log(req);
//     const imagePath = req.file.path; // Get the path of the uploaded image
  
//     pool.query(
//       "INSERT INTO images (path) VALUES ($1) RETURNING *",
//       [imagePath],
//       (err, result) => {
//         if (err) {
//           console.error("Error saving image to the database", err);
//           return res.status(500).send("Error saving image");
//         }
  
//         console.log("Image saved to the database");
  
//         const uploadedImage = result.rows[0];
//         const imageUrl = `http://localhost:8000/${uploadedImage.path}`; // Assuming the server is running on localhost:8000
  
//         return res.status(200).json({ status: "Success", imageUrl });
//       }
//     );
//   }
  
//   module.exports={upload,getImage}