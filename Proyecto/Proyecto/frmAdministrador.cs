using System.Windows.Forms;

namespace Proyecto
{
    public partial class frmAdministrador : Form
    {
        public frmAdministrador()
        {
            InitializeComponent();
        }
        private Usuario usu { get; set; }
        
        public frmAdministrador(Usuario usu)
        {
            InitializeComponent();
            this.usu = usu;
           
        }
        
    }
}