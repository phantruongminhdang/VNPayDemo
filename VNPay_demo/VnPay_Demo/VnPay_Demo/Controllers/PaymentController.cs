using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VnPay_Demo.ModelView;
using VnPay_Demo.Services.Interfaces;
using VnPay_Demo.Controllers.Base;

namespace VnPay_Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : BaseController
    {
        private readonly IVnPayService _vnPayService;

        public PaymentController(IVnPayService vnPayService)
        {
            _vnPayService = vnPayService;
        }

        [HttpPost]
        public IActionResult CreatePaymentUrl([FromBody] PaymentInformationModel model)
        {
            try
            {
                var url = _vnPayService.CreatePaymentUrl(model, HttpContext);
                if (url != null)
                    return Ok(url);
                else return BadRequest(url);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("InpHandle")]
        public IActionResult InpHandle()
        {
            try
            {
                var url = _vnPayService.PaymentExecuteIpn(Request.Query);
                if (url != null)
                    return Ok(url);
                else return BadRequest(url);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /*[HttpGet("PaymentCallback")]
        public IActionResult PaymentCallback()
        {
            try
            {
                var response = _vnPayService.PaymentExecute(Request.Query);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }*/
    }
}
