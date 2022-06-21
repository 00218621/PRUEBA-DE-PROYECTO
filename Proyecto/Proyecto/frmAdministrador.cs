using System;
using System.Windows.Forms;

namespace Proyecto
{
    public partial class FrmAdministrador: Form
    {
        public FrmAdministrador()
        {
            InitializeComponent();
        }
        private Usuario usu { get; set; }
        
        public FrmAdministrador(Usuario usu)
        {
            InitializeComponent();
            this.usu = usu;
           
        }
    }
}