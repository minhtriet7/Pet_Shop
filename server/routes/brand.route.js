const express = require('express');
const router = express.Router();
const ctrls = require('../controllers/brand.controller');
const { verifyAccessToken, isAdmin } = require('../middlewares/verify-token');

router.post('/', [verifyAccessToken, isAdmin], ctrls.createNewBrand);
router.get('/', ctrls.getBrands);
router.put('/:brid', [verifyAccessToken, isAdmin], ctrls.updateBrand);
router.delete('/:brid', [verifyAccessToken, isAdmin], ctrls.deleteBrand);

module.exports = router;