
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------

  app.get("/api/tips", function (req, res) {
    res.json(tipsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  //When a user submits form data:
  //calculate the tip for each person
  // ---------------------------------------------------------------------------

  app.post("/api/tips", function (req, res) {
    let newTip = req.body;
    let tipInfo = {
      tip:0,
      splitNum: newTip.splitTip,
      splitAmt: 0
    }
    console.log(`billamount ${newTip.billAmount}, tipamount ${newTip.percentTip} split ${newTip.splitTip}`);
    tipInfo.tip = (newTip.billAmount * (newTip.percentTip/100));
    tipInfo.splitAmt = tipInfo.tip/tipInfo.splitNum;
console.log (`tip ` + tipInfo.tip);
    res.json(tipInfo);
  });
}

// ---------------------------------------------------------------------------
