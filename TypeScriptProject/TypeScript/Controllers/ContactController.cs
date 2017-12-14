using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TypeScript.Models;
using Microsoft.Extensions.Options;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TypeScript.Controllers
{
    public class ContactController : Controller
    {

        readonly IOptions<EmailProperties> _EmailProperties;

        public ContactController(IOptions<EmailProperties> EmailProperties)
        {
            _EmailProperties = EmailProperties;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Send(ContactModel contactModel)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    EmailService EmailService = new EmailService();
                    await EmailService.SendEmailAsync(
                        contactModel.Email,
                        contactModel.Тема,
                        contactModel.Сообщение,
                        _EmailProperties.Value.ContactEmail,
                        _EmailProperties.Value.ContactPassword,
                        int.Parse(_EmailProperties.Value.SmtpPort),
                        _EmailProperties.Value.SmtpServer);

                    TempData["result"] = "Message sent.";
                    return RedirectToAction("Index");
                }
                catch (Exception e)
                {
                    TempData["result"] = @"Error: " + e.Message;
                }
            }
            return RedirectToAction("Index");
        }

    }
}
