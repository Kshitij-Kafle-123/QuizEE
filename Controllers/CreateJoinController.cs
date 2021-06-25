using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizEE.Controllers
{
    public class CreateJoinController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult hello(string userName)
        {
            return View();
           //    return Json(userName);
        }
        public JsonResult join(string inviteCode)
        {
            // return View();
            return Json(inviteCode);
        }
    }
}
