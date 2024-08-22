const express = require("express");
const router = express.Router();
const educations = require("../services/Careers");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await educations.getAll());
  } catch (err) {
    console.error(`Get Educations List failed `, err.message);
    next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    res.json(await educations.getById(req.params.id));
  } catch (err) {
    console.error(`Get Educations failed `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await educations.create(req.body));
  } catch (err) {
    console.error(`Create data failed `, err.message);
    next(err);
  }
});


router.put("/:id", async function (req, res, next) {
  try {
    res.json(await educations.update(req.body));
  } catch (err) {
    console.error(`Update data failed `, err.message);
    next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await educations.remove(req.params.id));
  } catch (err) {
    console.error(`Delete data failed `, err.message);
    next(err);
  }
});

// router.get("/load-more", async function (req, res, next) {
//   try {
//     res.json(await educations.getPages(req.query.page));
//   } catch (err) {
//     console.error(`Get Job List By Page failed `, err.message);
//     next(err);
//   }
// });

// router.get("/search", async function (req, res, next) {
//   try {
//     res.json(await educations.searchEducations(req.query.desc ?? "", req.query.full ?? true, req.query.loc ?? ""));
//   } catch (err) {
//     console.error(`Search Job List failed `, err.message);
//     next(err);
//   }
// });

module.exports = router;
