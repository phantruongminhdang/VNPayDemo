using VnPay_Demo.ModelView;

namespace VnPay_Demo.Services.Interfaces
{
    public interface IVnPayService
    {
        string CreatePaymentUrl(PaymentInformationModel model, HttpContext context);
        PaymentResponseModel PaymentExecute(IQueryCollection collections);
        ErrorViewModel PaymentExecuteIpn(IQueryCollection collections);
    }
}
