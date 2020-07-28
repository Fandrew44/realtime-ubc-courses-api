import express from 'express';
import sectionInfoController from '../controllers/sectionInfoController';

var router = express.Router();

//any endpoints beginning with /sectionInfo

router.get("/:subject/:course", sectionInfoController.getSectionInfoList);
router.get("/:subject/:course/:section", sectionInfoController.getSectionInfo);

export default router;